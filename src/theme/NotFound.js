import React, { useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '@theme-original/NotFound';


// using this as a redirection wrapper since `docusaurus/plugin-client-redirects`
// does not work with local development.

function createRedirects(url) {
  // /cosmos-sdk/x-<module> -> /x-<module>
  if (url.includes('/cosmos-sdk/x-')) {
    return url.replace('/cosmos-sdk/x-', '/x-');
  }

  return url;
}

export default function NotFoundWrapper(props) {
  const history = useHistory();

  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl.includes('/cosmos-sdk/x-')) {
      const newUrl = createRedirects(currentUrl);
      window.history.replaceState({}, '', newUrl);
      const relativePath = new URL(newUrl).pathname;
      history.push(relativePath);
    }
  }, [history]);

  return (
    <>
      <NotFound {...props} />
    </>
  );
}
