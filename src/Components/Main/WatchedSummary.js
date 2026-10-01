export default function WatchedSummary({ watched }) {
  const avgImdbRating =
    watched.reduce((sum, movie) => sum + movie.imdbRating, 0) / watched.length || 0;
  const avgUserRating =
    watched.reduce((sum, movie) => sum + movie.userRating, 0) / watched.length || 0;
  const avgRuntime =
    watched.reduce((sum, movie) => sum + movie.Runtime, 0) / watched.length || 0;

  return (
    <div className="summary">
      <h2>Movies watched</h2>
      <div>
        <p>
          <span>#</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime.toFixed(0)} min</span>
        </p>
      </div>
    </div>
  );
}
