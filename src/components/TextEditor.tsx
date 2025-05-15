import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import MenuBar from './MenuBar';
import './editor.css';

function TextEditor({ onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-3',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-3',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight.configure({
        HTMLAttributes: {
          class: '',
        },
      }),
    ],
    content: '<p>Hello</p>',
    editorProps: {
      attributes: {
        class: 'h-[400px] overflow-auto p-5 border-2 border-black rounded-lg',
      },
    },
  });

  if (!editor) {
    return;
  }

  return (
    <div className="flex flex-col gap-2">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TextEditor;
