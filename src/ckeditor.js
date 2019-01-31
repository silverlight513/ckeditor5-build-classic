import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import TextColor from 'ckeditor-text-color-select/src/textcolor';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Undo,
	Bold,
	Italic,
	Heading,
	Link,
	List,
	Paragraph,
	Alignment,
	Code,
	TextColor
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo',
			'|',
			'heading',
			'|',
			'bold',
			'italic',
			'textcolor',
			'|',
			'alignment:left',
			'alignment:center',
			'alignment:right',
			'alignment:justify',
			'|',
			'numberedList',
			'bulletedList',
			'|',
			'link',
			'|',
			'code'
		]
	},
	highlight: {
		options: [
			{
				model: 'redPen',
				class: 'pen-red',
				title: 'Red pen',
				color: 'red',
				type: 'pen'
			},
			{
				model: 'bluePen',
				class: 'pen-blue',
				title: 'Blue pen',
				color: 'blue',
				type: 'pen'
			},
			{
				model: 'pinkPen',
				class: 'pen-pink',
				title: 'Pink pen',
				color: 'pink',
				type: 'pen'
			},
			{
				model: 'orangePen',
				class: 'pen-orange',
				title: 'Orange pen',
				color: 'orange',
				type: 'pen'
			},
			{
				model: 'greenPen',
				class: 'pen-green',
				title: 'Green pen',
				color: 'green',
				type: 'pen'
			}
		]
	},
	language: 'en'
};
