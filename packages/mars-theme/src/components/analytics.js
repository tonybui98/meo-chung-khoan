import { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import moment from "moment";
import Comment from "./comment";
/**
 * The Post component that Mars uses to render any kind of "post type", like
 * posts, pages, attachments, etc.
 *
 * It doesn't receive any prop but the Frontity store, which it receives from
 * {@link connect}. The current Frontity state is used to know which post type
 * should be rendered.
 *
 * @param props - The Frontity store (state, actions, and libraries).
 *
 * @example
 * ```js
 * <Switch>
 *   <Post when={data.isPostType} />
 * </Switch>
 * ```
 *
 * @returns The {@link Post} element rendered.
 */
const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const hour = moment(date).locale('vi').startOf('hour').fromNow();

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, [actions.source]);

  console.log(post.acf);
  const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const CardPrice = () => {
    return(<div>
        <ul className="m-0 p-0">
            {
              post.acf.khang_cu.map((data, index) => {
                return(<li className="d-block" key={index}>
                  <div class="card p-3 mb-3">
                          <h5>{data.title}</h5>
                          <p>
                           <span class="p-1 rounded bg-success mb-0 me-2"> 
                              <i class="bi bi-arrow-up-right text-white"></i> 
                           </span>
                            Giá trần: {numberWithCommas(data.vung_mua.hightest_price)}
                          </p>
                          <p>
                          <span class="p-1 rounded bg-danger mb-0 me-2"> 
                            <i class="bi bi-arrow-down-right text-white"></i>
                          </span>
                            Giá sàn: {numberWithCommas(data.vung_mua.lowest_price)}
                            </p>
                          </div>
                      </li>);
              })
            }
        </ul>
      </div>);
  }
  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 col-md-8">
          <Container className="bg-white p-3 rounded">
          <ChartIndex className="w-100" dangerouslySetInnerHTML={{ __html: post.acf.table }} />
            <div>
              <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              {/* Hide author and date on pages */}
              {!data.isPage && (
                <div className="border-bottom pb-3 mb-3">
                  {author && (
                    <StyledLink link={author.link}>
                      <Author>
                      <i className="bi bi-person"></i> Đăng bởi: <b>{author.name}</b>
                      </Author>
                    </StyledLink>
                  )}
                  <DateWrapper>
                    {" "}
                    <i className="bi bi-calendar"></i> <b>{hour}</b>
                  </DateWrapper>
                </div>
              )}
            </div>

            {/* Look at the settings to see if we should include the featured image */}
            {state.theme.featured.showOnPost && (
              <FeaturedMedia id={post.featured_media} />
            )}
            {data.isAttachment ? (
              // If the post is an attachment, just render the description property,
              // which already contains the thumbnail.
              <div dangerouslySetInnerHTML={{ __html: post.description.rendered }} />
            ) : (
              // Render the content using the Html2React component so the HTML is
              // processed by the processors we included in the
              // libraries.html2react.processors array.
              <Content>
                <Html2React html={post.content.rendered} />
                <Comment />
              </Content>
            )}
          </Container>
      </div>
      <div className="col-12 col-md-4">
        <div className="p-3 bg-white rounded">
          <h3>Chỉ số phân tích</h3>
          <p>Thông số kỹ thuật là tài liệu tham khảo, không phải là lời khuyên đầu tư</p>
         <CardPrice />
         </div>
       </div>
    </div>
  </div>
  ) : null;
};

export default connect(Post);
const ChartIndex = styled.div`
`;
const Container = styled.div`
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43);
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    width: 100%;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
