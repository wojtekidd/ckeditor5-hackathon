/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* global console:false */

'use strict';

import ClassicEditor from '/ckeditor5/creator-classic/classic.js';

ClassicEditor.create(
	document.querySelector( '#editor' ), {
		features: [
			'formats',
			'delete',
			'enter',
			'typing',
			'paragraph',
			'undo',
			'basic-styles/bold',
			'basic-styles/italic',
			'hackathon/debugger'
		],
		toolbar: [
			'formats',
			'bold',
			'italic',
			'undo',
			'redo'
		]
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
