import React, { useEffect }  from 'react';
import { useHistory } from 'react-router-dom';
import NotFound from '@theme-original/NotFound';


// using this as a redirection wrapper since `docusaurus/plugin-client-redirects`
//  does not work with local development.

function createRedirects(url) {
  console.log('createRedirects', url);

  if (url.includes('/cosmos-sdk/x-')) {
    console.log('createRedirects had /cosmos-sdk/x- url: ', url);
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
