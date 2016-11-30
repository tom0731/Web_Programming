import '../Album.css'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photofile: 0, photoNum: 0, photoDisplayPaths: []
		};
		// Bind handler
		this.onClickUploadPhoto = this.onClickUploadPhoto.bind(this);
		this.receiveUploadPhoto = this.receiveUploadPhoto.bind(this);
		this.renderPhotos = this.renderPhotos.bind(this);
	}

	receiveUploadPhoto(e) {
		let newPhotoNum = this.state.photoNum + 1;
		const newUpLoadFile = e.target.files[0];
		this.setState({ photofile: newUpLoadFile, photoNum: newPhotoNum });
	}

	onClickUploadPhoto(e) {
		// console.log(this.state);
		const {photofile, photoNum} = this.state;
		// console.log(photofile);
		let form = new FormData();
		form.append(`photo_${photoNum}`, photofile)
		// console.log(form.values().next());
		fetch('/api/uploadPhotos/', { method: 'POST', body: form })
			.then(res => {
				// console.log(res);
				return res.text();
			})
			.then((photoPath) => {
				// console.log(photoPath);
				let newPhotoPath = this.state.photoDisplayPaths;
				if (newPhotoPath.indexOf(photoPath) === -1) {
					newPhotoPath.push(photoPath);
				}
				this.setState({ photoDisplayPaths: newPhotoPath})
			});
	}

	renderPhotos() {
		// console.warn("This has not implemented yet...");
		const photoDisplayPaths = this.state.photoDisplayPaths;
		if (photoDisplayPaths.length !== 0) {
			return (
				<div className="photo">
					{ photoDisplayPaths.map((p, i) => {
							return <img key={i + 1}
								src={ p }
								alt={ p }
								height="200"
							/>
						})
					}
				</div>
			);
		}
	}

	render() {
		return (
			<div id="photoContainer">
				<div className="button">
					<input
						className="photoUploader"
						id="photoFile"
						type="file"
						accept=".jpg, .png"
						onChange={ this.receiveUploadPhoto }
					/>
					<button
						className="uploadBtn"
						id="upload"
						onClick={ this.onClickUploadPhoto }
					>upload
					</button>
				</div>
				{ this.renderPhotos() }
			</div>
		);
	}
}

ReactDOM.render(
  <Album />,
	document.getElementById('root')
);

export default Album;

