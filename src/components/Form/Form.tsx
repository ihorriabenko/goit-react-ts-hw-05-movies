import { useState } from 'react';

interface FormProps {
  updateQueryString: (query: { query?: string }) => void;
}

export default function Form({ updateQueryString }: FormProps) {
  const [query, setQuery] = useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const isQuery = query !== '' ? { query } : {};

    updateQueryString(isQuery);

    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={query} onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}
