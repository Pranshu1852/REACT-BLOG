import type { FormEvent } from 'react';
import FormField from '../components/FormField';
import TextEditor from '../components/TextEditor';

function AddBlog() {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border-2 border-black rounded-lg m-auto w-[50%] mt-10 p-5"
    >
      <h1 className="text-center text-3xl font-semibold font-[Tagesschrift]">
        Add Blog
      </h1>
      <TextEditor />
      <input type="text" />
      <button
        type="submit"
        className="bg-black text-white m-auto py-2 px-4 font-semibold rounded-md"
      >
        Create Blog
      </button>
    </form>
  );
}

export default AddBlog;
