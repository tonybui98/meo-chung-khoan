import { connect, styled } from 'frontity';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';
import Link from '../link';

const NewsTemplates = (props) => {
  const hour = moment(props.data.date_gmt).locale('vi').startOf('hour').fromNow();
  return(
    <>
    <div className="p-3 mb-3 rounded-0 card">
            <div className='d-flex gap-3'>
              <CardImage>
                  <Link link={props.data.link}>
                     <SliderImage className={"rounded"} src={props.data.featured_image_src} />
                  </Link>
              </CardImage>
              <CardContent>
                <NewMeta className="text-sm text-mute float-right me-2"><i className="bi bi-person"></i> Bởi: {props.data.author_meta.name}</NewMeta>
                <NewMeta className="text-sm text-mute float-right"><i className="bi bi-calendar"></i> {hour}</NewMeta>
                <CardHeading className="card-title">
                  <Link link={props.data.link}>
                    {props.data.title.rendered}
                  </Link>
                  </CardHeading>
              </CardContent>
            </div>
            <div className="w-100">  
                <CardExcerpt className="card-text mb-0">{ReactHtmlParser(props.data.excerpt.rendered.slice(0, 80) + "...")}</CardExcerpt>
            </div>
    </div>
    </>
  );
}

export default connect(NewsTemplates);
const NewMeta = styled.span`
  font-size: 9px;
  color: #4e4e4e;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
`

const CardExcerpt = styled.div`
  font-size: 14px;
  p{
    margin: 0px;
  }
`;

const CardImage = styled.div`
  width: 30%;
`;

const CardContent = styled.div`
  width: 70%;
`;

const SliderImage = styled.img`
  width: 100%;
`;

const CardHeading = styled.h3`
  font-size: 16px;
  font-weight: bold;
`;
