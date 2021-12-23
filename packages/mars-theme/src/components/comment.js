import connect from '@frontity/connect';
import TelegramComments from 'react-telegram-comments';

const Comments = () => (
  <TelegramComments
      customColor="fb9f9f"
      customHeight="450"
      commentsNumber={3}
      isDark
      pageId="about-page"
      showColorfulNames
      showDislikes
      showIconOutlines
      websiteKey="QPsw4D-h"
      containerClassName="awesome-comments"
      wrapperClassName="awesome-comments__wrapper"
  />
);

export default connect(Comments);