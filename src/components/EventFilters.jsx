import { useState, useMemo } from 'react';

const EventFilters = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredEvents = useMemo(() => 
    events.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === 'all' || event.category === categoryFilter)
    ), [events, searchTerm, categoryFilter]
  );

  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search events..."
      />
      {/* Render filtered events */}
    </div>
  );
};
