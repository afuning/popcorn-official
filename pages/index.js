import Link from 'next/link';
import withLayout from '../hoc-comps/withLayout';
import fetch from 'isomorphic-unfetch';

const Index = props => {
  const { shows } = props;
  return (
    <div>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          padding: 0;
        }
      `}</style>
    </div>
  );
};

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default withLayout(Index);