import { Editor } from '@tiptap/react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function MenuBar({ editor }: { editor: Editor }) {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group flex flex-row gap-2 flex-wrap font-medium">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} menubutton`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`menubutton ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
        >
          H2
        </button>
        <button
          onClick={() =>
            `menubutton ${editor.chain().focus().toggleHeading({ level: 3 }).run()}`
          }
          className={`menubutton ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
        >
          H3
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`menubutton font-bold ${editor.isActive('bold') ? 'is-active' : ''}`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`menubutton italic ${editor.isActive('italic') ? 'is-active' : ''}`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`menubutton line-through ${editor.isActive('strike') ? 'is-active' : ''}`}
        >
          abc
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`menubutton ${editor.isActive('bulletList') ? 'is-active' : ''}`}
        >
          <FormatListBulletedIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`menubutton ${editor.isActive('orderedList') ? 'is-active' : ''}`}
        >
          <FormatListNumberedIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`menubutton ${editor.isActive('highlight') ? 'is-active' : ''}`}
        >
          Highlight
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`menubutton ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
        >
          <FormatAlignLeftIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`menubutton ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
        >
          <FormatAlignCenterIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`menubutton ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
        >
          <FormatAlignRightIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`menubutton ${editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}`}
        >
          <FormatAlignJustifyIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="menubutton"
        >
          <UndoIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="menubutton"
        >
          <RedoIcon />
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
