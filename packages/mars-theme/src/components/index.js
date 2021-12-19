import React , {useRef, useState, useEffect} from "react";

// Import Frontity
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";

// Import các components
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";


// Import Các trang cần thiết
import Home from "./pages/home";
import Login from "./pages/login";

// Loading Bar
import LoadingBar from 'react-top-loading-bar'
import globalCss from "./index.css";
import bootstrapStyle from "bootstrap/dist/css/bootstrap.min.css";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 *
 * @param props - The props injected by Frontity's {@link connect} HOC.
 *
 * @returns The top-level react component representing the theme.
 */
const Theme = ({ state }) => {
  console.log(state);
  const [progress, setProgress] = useState(0);

  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  useEffect(() => {
    setProgress(100);
  }, [data])

  // console.log(process.env.REACT_APP_FRONTITY_API_LINK);
  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalCss} />
      <Global styles={bootstrapStyle} />
      {/* Add the header of the site. */}

      <LoadingBar
        color='#f11946'
        progress={progress}
        when={() => {setProgress(100); console.log('loading')}}
        onLoaderFinished={() => setProgress(0)}
      />

      <HeadContainer>
        <Header />
      </HeadContainer>

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Main className="bg-light">
        <Switch> 
          <Loading when={data.isFetching} />
          <Home when={state.router.link === '/'} />
          <Login when={state.router.link === '/dang-nhap/'} />
          <List when={data.isArchive} />
          <Post when={data.isPostType} />
          <PageError when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
`;

const Main = styled.div`
  display: block;
`;
