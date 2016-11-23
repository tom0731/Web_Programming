import '../Album.css'

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photofile: 0, photoNum: 0
		};
		// Bind handler
		this.onClickUploadPhoto = this.onClickUploadPhoto.bind(this);
		this.getUploadPhoto = this.getUploadPhoto.bind(this);
	}

	renderPhotos() {
		console.warn("This has not implemented yet...");
	}

	getUploadPhoto(e) {
		let newPhotoNum = this.state.photoNum + 1;
		// let newPhotofile = this.state.photofile;
		const newUpLoadFile = e.target.files[0];
		// console.log(newPhotofile);
		// newPhotofile.push(newUpLoadFile);
		this.setState({photofile: newUpLoadFile, photoNum: newPhotoNum});
	}

	onClickUploadPhoto(e) {
		// console.log(this.state);
		const {photofile, photoNum} = this.state;
		console.log(photofile);
		let form = new FormData();
		form.append(`photo_${photoNum}`, photofile)
		console.log(form.values().next());
		fetch('/api/uploadPhotos/', { method: 'POST', body: form })
			.then(res => {
				// console.log(res);
				return res.text();
			})
			.then((text) => console.log(text));
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
						onChange={ this.getUploadPhoto }
					/>
					<button
						className="uploadBtn"
						id="upload"
						onClick={ this.onClickUploadPhoto }
					>upload
					</button>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <Album />,
	document.getElementById('root')
);

export default Album;

