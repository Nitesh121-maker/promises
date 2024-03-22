'use client'
import { useState } from 'react';
import Imgupload from '../../img/gallery.png'
import { Editor, EditorState, RichUtils, Modifier, convertToRaw } from 'draft-js';
import { FaDownload } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { MdFormatColorText } from 'react-icons/md';
import { FaPaintBrush }  from 'react-icons/fa'
import '../post/post.css'
const EditorPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [formatColorText, setformatColorText] = useState(false);
  const [background, setBackground] = useState(false);
  const handleColorChange = (color:string) => {
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const newContentState = Modifier.applyInlineStyle(contentState, selection, 'CUSTOM_COLOR');
    const newEditorState = EditorState.push(editorState, newContentState, 'change-inline-style');
    setEditorState(newEditorState);
    setTextColor(color);
  };

  const handleBackgroundColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  const handleTextStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleImageUpload = async (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    // Handle image upload logic here
  };

  const handleSaveImage = () => {
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    // Convert rawContentState to an image and save it
    // Example: Use html2canvas library or any other suitable method
  };

  const customStyleMap = {
    CUSTOM_COLOR: {
      color: textColor,
    },
  };

  const textColorpicker =()=>{
    setformatColorText(!formatColorText);
  }
  const  backgroundColorPicker=()=>{
    setBackground(!background);
  }
  return (
    <div>
        <div className="editor bg-gray-100 p-6 rounded-lg shadow-md">
                { formatColorText&&
                    <div className="overflow-hidden mr-2">
           
                        <input 
                            type="color" 
                            value={textColor} 
                            onChange={(e) => handleColorChange(e.target.value)} 
                            className="rounded-full"
                        />
                    </div>
                }
                { background&&               
                    <div className="overflow-hidden mr-2">
                        <input 
                            type="color" 
                            value={backgroundColor} 
                            onChange={(e) => handleBackgroundColorChange(e.target.value)} 
                            className="rounded-full"
                        />
                    </div>
                }
            <div className="editor-controls mb-4 flex items-center">
                <div className="color-picker overflow-hidden mr-2" >
                     <MdFormatColorText style={{ width: '80%', height: '80%' }} onClick={textColorpicker}/>
                </div>
  
                <div className="background-color-picker rounded-full overflow-hidden mr-2" onClick={backgroundColorPicker}>
                    <FaPaintBrush onClick={backgroundColorPicker}/>
                </div>

                <button 
                onClick={() => handleTextStyle('BOLD')} 
                className="text-white bg-blue-500 rounded-full px-3 py-2 mr-2 hover:bg-blue-600"
                >
                B
                </button>
                <button 
                onClick={() => handleTextStyle('ITALIC')} 
                className="text-white bg-blue-500 rounded-full px-3 py-2 mr-2 hover:bg-blue-600"
                >
                I
                </button>
                <button 
                onClick={() => handleTextStyle('UNDERLINE')} 
                className="text-white bg-blue-500 rounded-full px-3 py-2 mr-1 hover:bg-blue-600"
                >
                U
                </button>
                <label className="text-white rounded-full px-2 py-2 mr-1 cursor-pointer">
                <img src={Imgupload.src} alt="Upload" className="w-12 h-12" />
                <input type="file" accept="image/*" className="hidden" />
                </label>
                <button 
                onClick={handleSaveImage} 
                className="text-white bg-blue-500 rounded-md px-2 py-2 mr-1 hover:bg-blue-600"
                >
                <FaDownload/>
                </button>
            </div>
            <div className="editor-content border border-gray-300 rounded-full p-4" style={{ backgroundColor }}>
                <Editor
                editorState={editorState}
                onChange={setEditorState}
                customStyleMap={customStyleMap}
                />
            </div>
            <button className="share-button"><FaShare/></button>
        </div>
    </div>

  );
};

export default EditorPage;
