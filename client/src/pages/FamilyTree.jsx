<div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
  <input
    type="text"
    placeholder="Search by name or relation..."
    className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <select
    className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
    value={filterSide}
    onChange={(e) => setFilterSide(e.target.value)}
  >
    <option value="">All</option>
    <option value="paternal">Paternal</option>
    <option value="maternal">Maternal</option>
  </select>
</div>
