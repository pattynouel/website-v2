import React from "react";
import { GridContainerWithImage, Div, GridContainer } from "../Sections";
import { H2, H5, H4, Paragraph } from "../Heading";
import { Colors, Img, Button, StyledBackgroundSection, Link } from "../Styling";
import Badges from "../Badges";
import News from "../News";
import { navigate } from "gatsby";
import { requestSyllabus } from "../../actions";
import ReactPlayer from "../ReactPlayer";
import TestimonialsCarrousel from "../Testimonials";
import With4Geeks from "../With4Geeks";
// import WhyPython from '../WhyPython';
import AlumniProjects from "../AlumniProjects";
import { SuccessStories } from "../../templates/success-stories";
import GeeksVsOthers from "../GeeksVsOthers";
import GeeksInfo from "../GeeksInfo";
import ProgramDetails from "../ProgramDetails";
import ProgramDetailsMobile from "../ProgramDetailsMobile";
import LeadForm from "../LeadForm";
import OurPartners from "../OurPartners";
import About4Geeks from "../About4Geeks";
import IconsBanner from "../IconsBanner";
import Icon from "../Icon";
import ChooseYourProgram from "../ChooseYourProgram";
import StarRating from "../StarRating";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { smartRedirecting } from "../../utils/utils.js";

const Title = ({ id, title, paragraph }) => {
  return (
    <GridContainer id={id} margin="40px 0 0 0">
      <H2 type="h2">{title}</H2>
      <Paragraph margin="26px 0">{paragraph}</Paragraph>
    </GridContainer>
  );
};

const Side = ({
  video,
  image,
  heading,
  sub_heading,
  content,
  button,
  bullets,
}) => {
  if (video)
    return (
      <ReactPlayer
        thumb={image && image.src}
        id={video}
        style={{
          width: "100%",
          height: "260px",
        }}
      />
    );

  if (image) {
    const imgStyles = image.style ? JSON.parse(image.style) : null;
    const [img_h_xl, img_h_lg, img_h_md, img_h_sm, img_h_xs] =
      imgStyles && imgStyles.height
        ? Array.isArray(imgStyles.height)
          ? imgStyles.height
          : [imgStyles.height]
        : ["100%"];
    return (
      <Img
        src={image.src}
        onClick={() => {
          if (image.link) {
            if (image.link.indexOf("http") > -1) window.open(image.link);
            else navigate(image.link);
          }
        }}
        style={imgStyles}
        // borderRadius={"1.25rem"}
        borderRadius={"3px"}
        // className="pointer"
        alt={"4Geeks Academy Section"}
        margin="auto"
        height={img_h_xl}
        width={imgStyles ? imgStyles.width || "100%" : "100%"}
        h_sm={img_h_sm || "250px"}
        backgroundSize={`contain`}
      />
    );
  }

  const [h_xl, h_lg, h_md, h_sm, h_xs] = heading ? heading.font_size : [];
  const [sh_xl, sh_lg, sh_md, sh_sm, sh_xs] =
    sub_heading && Array.isArray(sub_heading.font_size)
      ? sub_heading.font_size
      : [];
  const [c_xl, c_lg, c_md, c_sm, c_xs] = content ? content.font_size : [];
  return (
    <Div
      flexDirection_tablet="column"
      flexDirection="column"
      padding="40px 20px"
      padding_tablet="36px 72px"
    >
      {heading && (
        <H2
          type="h2"
          textAlign_tablet="left"
          lineHeight="38px"
          lineHeight_tablet="38px"
          fontSize={h_xs || "30px"}
          fs_xl={h_xl}
          fontSize_md={h_md || "40px"}
          fontSize_sm={h_sm}
          margin="30px 0 20px 0"
        >
          {heading.text}
        </H2>
      )}
      {sub_heading && (
        <Paragraph
          textAlign_tablet="left"
          padding={heading ? "0" : "20px"}
          margin="0"
          fontSize={sh_xl || "16px"}
          fontSize_sm={sh_sm}
          fonSize_md={sh_md}
          fontSize_xs={sh_xs}
          fontHeight="30px"
        >
          {sub_heading.text}
        </Paragraph>
      )}
      {Array.isArray(bullets) && (
        <Div
          display="grid"
          gridAutoFlow="dense"
          gridTemplateColumns="repeat(auto-fill, minmax(40%, 1fr))"
          gridAutoRows="4.6rem"
          gridGap="0"
        >
          {bullets.map((p, index) => {
            return (
              <Div
                key={index}
                gridColumn_tablet={index >= 5 ? "2/2" : "1/2"}
                borderBottom="1px solid rgba(164, 164, 164, 0.4)"
                height="74px"
                alignItems="center"
                padding="0 5px 0 20px"
                padding_tablet="0 5px 0 10px"
              >
                <Div
                  flexDirection="column"
                  alignSelf="center"
                  padding="0 8px 0 0"
                >
                  <Icon
                    icon="check"
                    width="18px"
                    color={Colors.yellow}
                    fill={Colors.yellow}
                  />
                </Div>
                <H2
                  type="h3"
                  textAlign="left"
                  fontSize="15px"
                  fontWeight="400"
                  lineHeight="22px"
                >
                  {p}
                </H2>
              </Div>
            );
          })}
        </Div>
      )}

      {content && /<\/?[a-z0-9]+>/g.test(content.text) ? (
        <Paragraph
          textAlign="left"
          textAlign_tablet="left"
          padding={heading ? "0" : "15px"}
          margin="26px 0"
          fontSize={c_xl || "16px"}
          fontSize_sm={c_sm}
          fonSize_md={c_md}
          fontSize_xs={c_xs}
          fontHeight="30px"
          dangerouslySetInnerHTML={{ __html: content.text }}
        />
      ) : content ? (
        content.text.split("\n").map((p, i) => (
          <Paragraph
            key={`${i}-${p}`}
            textAlign="left"
            textAlign_tablet="left"
            padding={heading ? "0" : "15px"}
            margin="26px 0"
            fontSize={c_xl || "16px"}
            fontSize_sm={c_sm}
            fonSize_md={c_md}
            fontSize_xs={c_xs}
            fontHeight="30px"
          >
            {p}
          </Paragraph>
        ))
      ) : null}

      {button && (
        <Button
          outline
          // width="250px"
          colorHoverText={button.hover_color || Colors.blue}
          background={Colors[button.background] || button.background}
          lineHeight="26px"
          textColor={Colors.black}
          color={Colors[button.color] || button.color}
          // padding="0"
          padding_tablet="0"
          fontSize="15px"
          textAlign="left"
          margin="2rem 0"
          padding=".35rem.85rem"
          onClick={() => {
            if (button.path && button.path.indexOf("http") > -1)
              window.open(button.path);
            else navigate(button.path);
          }}
        >
          {button.text}
        </Button>
      )}
    </Div>
  );
};

export const TwoColumn = ({ left, right, proportions }) => {
  const [left_size, right_size] = proportions ? proportions : [];

  return (
    <Div
      flexDirection="column"
      gap="0px"
      flexDirection_tablet="row"
      m_sm="0px 0px 100px 0"
    >
      <Div
        flexDirection="column"
        size_tablet={left_size || 6}
        size="12"
        // maxHeight="300px"
        textAlign="center"
      >
        <Side {...left} />
      </Div>
      <Div
        flexDirection="column"
        size_tablet={right_size || 6}
        size="12"
        textAlign="center"
      >
        <Side {...right} />
      </Div>
    </Div>
  );
};
TwoColumn.defaultProps = {
  proportions: [],
  left: null,
  right: null,
};

export const MultiColumns = ({
  heading,
  sub_heading,
  end_paragraph,
  button,
  columns,
  swipable,
}) => {
  const [h_xl, h_lg, h_md, h_sm, h_xs] = heading ? heading.font_size : [];
  const [sh_xl, sh_lg, sh_md, sh_sm, sh_xs] =
    sub_heading && Array.isArray(sub_heading.font_size)
      ? sub_heading.font_size
      : [];
  const [p_xl, p_lg, p_md, p_sm, p_xs] =
    end_paragraph && Array.isArray(end_paragraph.font_size)
      ? end_paragraph.font_size
      : [];
  return (
    <Div
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding_tablet="0 4em"
      padding="0 10px"
      width="100%"
      style={{ textAlign: "center" }}
    >
      {heading && (
        <H2
          type="h2"
          lineHeight="38px"
          lineHeight_tablet="38px"
          fontSize={h_xs || "30px"}
          fs_xl={h_xl}
          fontSize_md={h_md || "40px"}
          fontSize_sm={h_sm}
          margin="30px 0 20px 0"
          style={{ textAlign: "center" }}
        >
          {heading.text}
        </H2>
      )}

      {sub_heading && /<\/?[a-z0-9]+>/g.test(sub_heading.text) ? (
        <Paragraph
          padding={heading ? "0" : "20px"}
          margin="15px 0"
          fontSize={sh_xl || "16px"}
          fontSize_sm={sh_sm}
          fonSize_md={sh_md}
          fontSize_xs={sh_xs}
          fontHeight="30px"
          style={sub_heading.style ? JSON.parse(sub_heading.style) : null}
          // style={{textAlign:'center'}}
          dangerouslySetInnerHTML={{ __html: sub_heading.text }}
        />
      ) : sub_heading ? (
        <Paragraph
          padding={heading ? "0" : "20px"}
          margin="15px 0"
          fontSize={sh_xl || "16px"}
          fontSize_sm={sh_sm}
          fonSize_md={sh_md}
          fontSize_xs={sh_xs}
          fontHeight="30px"
          style={sub_heading.style ? JSON.parse(sub_heading.style) : null}
          // style={{textAlign:'center'}}
        >
          {sub_heading.text}
        </Paragraph>
      ) : null}
      <Columns swipable={swipable} columns={columns} />
      {end_paragraph && (
        <Paragraph
          padding={end_paragraph ? "0" : "20px"}
          margin="15px 0"
          fontSize={p_xl || "16px"}
          fontSize_sm={p_sm}
          fonSize_md={p_md}
          fontSize_xs={p_xs}
          fontHeight="30px"
          lineHeight="19px"
          style={{ textAlign: "center" }}
          dangerouslySetInnerHTML={{ __html: end_paragraph.text }}
          onClick={(e) => {
            if (e.target.tagName === "A")
              smartRedirecting(e, end_paragraph.path);
          }}
        />
      )}
      {button && (
        <Button
          outline
          // width="250px"
          colorHoverText={button.hover_color || Colors.blue}
          lineHeight="26px"
          textColor={Colors[button.color] || button.color}
          color={Colors[button.color] || button.color}
          padding_tablet="0"
          fontSize="15px"
          style={button.style ? JSON.parse(button.style) : null}
          background={Colors[button.background] || button.background}
          // textAlign="left"
          margin="2rem 0"
          padding=".35rem.85rem"
          onClick={() => {
            if (button.path && button.path.indexOf("http") > -1)
              window.open(button.path);
            else navigate(button.path);
          }}
        >
          {button.text}
        </Button>
      )}
    </Div>
  );
};

MultiColumns.defaultProps = {
  heading: null,
  sub_heading: null,
  end_paragraph: null,
  button: null,
  columns: [],
};

export const SingleColumn = ({ column }) => {
  return (
    <Div flexDirection="row" m_sm="0px 0px 100px 0">
      <Div flexDirection="column" size={12} size_sm="12" align_sm="center">
        <Side {...column} />
      </Div>
    </Div>
  );
};
TwoColumn.defaultProps = {
  column: null,
};

export const Columns = ({ columns, proportions, swipable }) => {
  return swipable ? (
    <Div
      width="100%"
      className="badge-slider hideOverflowX__"
      flexDirection="row"
      m_sm="0px 0px 100px 0"
      justifyContent="between"
    >
      {columns.map((c, index) => (
        <Div
          key={index}
          flexDirection="column"
          size={c.size[0]}
          size_sm={c.size[2]}
          size_xs={c.size[3]}
          textAlign={c.align}
          minWidth="250px"
          margin="25px 0 0 0"
        >
          <Img
            src={c.image.src}
            onClick={() => {
              if (c.image.link) {
                if (c.image.link.indexOf("http") > -1)
                  window.open(c.image.link);
                else navigate(c.image.link);
              }
            }}
            style={c.image.style ? JSON.parse(c.image.style) : null}
            // borderRadius={"1.25rem"}
            className="pointer"
            alt={"4Geeks Academy Section"}
            margin="auto"
            height="100%"
            width="100%"
            h_sm="250px"
            backgroundSize={`cover`}
          />

          {/* <div style={{background:"red", width:"250px", height:"250px"}}></div> */}
          <Paragraph
            // lineHeight="30px"
            // fontWeight="700"
            color="black"
            margin="25px 0 0 0"
            style={c.content.style ? JSON.parse(c.content.style) : null}
            dangerouslySetInnerHTML={{ __html: c.content.text }}
          />
        </Div>
      ))}
    </Div>
  ) : (
    <Div
      flexDirection="row"
      m_sm="0px 0px 100px 0"
      justifyContent="around"
      width="100%"
      flexWrap="wrap"
    >
      {columns.map((c, index) => (
        <Div
          key={index}
          flexDirection="column"
          size={c.size[0]}
          size_sm={c.size[2]}
          size_xs={c.size[3]}
          textAlign={c.align}
        >
          <Img
            src={c.image.src}
            onClick={() => {
              if (c.image.link) {
                if (c.image.link.indexOf("http") > -1)
                  window.open(c.image.link);
                else navigate(c.image.link);
              }
            }}
            style={c.image.style ? JSON.parse(c.image.style) : null}
            borderRadius={"1.25rem"}
            className="pointer"
            alt={"4Geeks Academy Section"}
            margin="auto"
            height="100%"
            width="100%"
            h_sm="250px"
            backgroundSize={`cover`}
          />
          <Paragraph
            lineHeight="30px"
            fontWeight="700"
            color="black"
            dangerouslySetInnerHTML={{ __html: c.content.text }}
          />
        </Div>
      ))}
    </Div>
  );
};
Columns.defaultProps = {
  columns: [],
  proportions: [],
};

export const landingSections = {
  in_the_news: ({ session, pageContext, yml, course, location, index }) => (
    <GridContainer
      id="in_the_news"
      key={index}
      padding="40px 0"
      padding_tablet="50px 0"
    >
      <H4
        align="center"
        fontSize="18px"
        color={Colors.darkGray}
        margin="20px 0px 10px 0px"
        m_sm="20px auto"
        maxWidth="350px"
      >
        {yml.heading}
      </H4>

      <News
        maxWidth="100px"
        justifySelf="center"
        margin="40px 0 40px"
        padding="0"
        padding_tablet="0 6%"
        limit={yml.limit || 3}
        location={
          location
            ? location
            : session &&
              session.location &&
              session.location.breathecode_location_slug
        }
        lang={pageContext.lang}
        filter={
          !Array.isArray(yml.filter) ? null : (n) => yml.filter.includes(n.name)
        }
      />
    </GridContainer>
  ),

  about4Geeks: ({ session, data, pageContext, yml, index }) => {
    let dataYml =
      data.allLandingYaml.edges.length !== 0 &&
      data.allLandingYaml.edges[0].node.about4Geeks !== null
        ? data.allLandingYaml.edges
        : data.allDownloadableYaml.edges;
    return (
      <React.Fragment key={index}>
        <About4Geeks id="about4Geeks" lang={dataYml[0].node.about4Geeks} />
      </React.Fragment>
    );
  },

  iconogram: ({ session, data, pageContext, yml, index }) => {
    let dataYml =
      data.allLandingYaml.edges.length !== 0 &&
      data.allLandingYaml.edges[0].node.iconogram !== null
        ? data.allLandingYaml.edges
        : data.allDownloadableYaml.edges;
    let content = dataYml[0].node.iconogram;
    return (
      <GridContainer
        key={index}
        id="iconogram"
        background={Colors.lightYellow}
        columns="2"
        rows="2"
        columns_tablet="4"
        margin="0 0 58px 0"
        height="470px"
        height_tablet="320px"
        margin_tablet="0 0 78px 0"
      >
        {Array.isArray(content.icons) &&
          content.icons?.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <IconsBanner icon={item.icon} title={item.title} />
              </React.Fragment>
            );
          })}
      </GridContainer>
    );
  },

  badges: ({ session, data, pageContext, yml, course, index }) => {
    let dataYml =
      data.allLandingYaml.edges.length !== 0 &&
      data.allLandingYaml.edges[0].node.badges !== null
        ? data.allLandingYaml.edges
        : data.allDownloadableYaml.edges;
    let badges = dataYml[0].node.badges;
    return (
      <React.Fragment key={index}>
        <Badges
          link
          // wrapped_images={true}
          id="badges"
          lang={pageContext.lang}
          background={Colors.verylightGray}
          paragraph={badges.heading}
          short_text
          padding="60px 0"
          padding_tablet="68px 0"
          margin="0"
          margin_tablet="0 0 78px 0"
        />
      </React.Fragment>
    );
  },

  rating_reviews: ({ session, data, pageContext, yml, course, index }) => {
    let dataYml =
      data.allLandingYaml.edges[0] || data.allDownloadableYaml.edges[0];
    let ratingReviews = dataYml.node.rating_reviews;

    return (
      <Div
        key={index}
        padding="60px 0 60px 0"
        display="flex"
        flexDirection="column"
        borderBottom="3px solid #F5F5F5"
      >
        <H2 type="h2" fontSize="22px" fontWeight="700" padding="10px 0 60px 0">
          {ratingReviews.heading}
        </H2>
        <Div
          display="flex"
          flexDirection="column"
          flexDirection_tablet="row "
          justifyContent="center"
          gap="45px"
          gap_tablet="10%"
        >
          {ratingReviews.rating_list.map((item, i) => {
            return (
              <Div
                key={i}
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <GatsbyImage
                  style={{
                    height: "50px",
                    minWidth: "135px",
                    width: "135px",
                  }}
                  imgStyle={{ objectFit: "contain" }}
                  loading="eager"
                  // draggable={false}
                  // fadeIn={false}
                  alt={item.alt}
                  image={getImage(item.image.childImageSharp.gatsbyImageData)}
                  // fluid={l.image.childImageSharp.fluid}
                />
                <StarRating rating={item.rating} />
                <Paragraph
                  padding="6px 0"
                  fontSize="15px"
                  letterSpacing="0.05em"
                  fontWeight="bold"
                >
                  {`${item.rating} ${
                    pageContext.lang === "us" ? "On Reviews" : "En reseñas"
                  }`}
                </Paragraph>
              </Div>
            );
          })}
        </Div>
      </Div>
    );
  },

  syllabus: ({ session, data, pageContext, yml, course, location, index }) => {
    const filteredPrograms =
      data.allChooseProgramYaml.edges[0].node.programs.filter((course_el) => {
        return (
          course.filter((array_el) => {
            return course_el.bc_slug === array_el;
          }).length !== 0
        );
      });

    const programs = filteredPrograms.map((p) => ({
      label: p.text,
      value: p.bc_slug,
    }));

    return (
      <GridContainer
        key={index}
        id="syllabus"
        padding_tabletChild="0px calc(55% - 30%)"
        padding="50px 40px"
        padding_tablet="50px 40px"
        background={Colors.lightGray}
      >
        <Div
          flexDirection="column"
          background={Colors.verylightGray}
          padding="20px 0"
          borderRadius="3px"
          borderRadius_tablet="10px"
          padding_tablet="60px 40px"
          size="12"
          size_tablet="12"
          width="100%"
          width_tablet="100%"
          margin="0"
          textAlign_sm="center"
        >
          <H5 type="h5" fontSize="20px" padding="0 0 35px 0">
            {yml.heading.text}
          </H5>
          <LeadForm
            landingTemplate
            layout="block"
            background={Colors.verylightGray}
            margin="0"
            marginButton={`15px 0 30px auto`}
            buttonBorderRadius="3px"
            justifyContentButton="center"
            inputBgColor="#F9F9F9"
            selectProgram={programs}
            inputBgColor={Colors.white}
            layout="flex"
            lang={pageContext.lang}
            sendLabel={yml.button ? yml.button.text : "SEND"}
            formHandler={requestSyllabus}
            data={{
              course: {
                type: "hidden",
                value: programs.length <= 1 ? programs[0].value : course,
                valid: true,
              },
              utm_location: {
                type: "hidden",
                value: location,
                valid: true,
              },
            }}
          />
        </Div>
      </GridContainer>
    );
  },
  geeks_vs_others: ({ session, pageContext, yml, course, index }) => {
    console.log("YML", yml);
    return (
      <React.Fragment key={index}>
        <Title
          id="geeks_vs_others"
          title={yml.heading}
          paragraph={yml.paragraph}
        />
        <GeeksVsOthers
          lang={pageContext.lang}
          limit={yml.total_rows}
          title={yml.heading}
          paragraph={yml.sub_heading}
        />
        ,
      </React.Fragment>
    );
  },

  program_details: ({ session, pageContext, yml, data, index }) => {
    const course =
      data.allCourseYaml.edges.length > 0
        ? data.allCourseYaml.edges[0].node
        : {};
    return (
      <React.Fragment key={index}>
        <ProgramDetails
          id="program_details"
          heading={yml.heading}
          sub_heading={yml.sub_heading}
          background={yml?.background}
          details={course?.details}
          lang={pageContext.lang}
        />
        <ProgramDetailsMobile details={course && course.details} />
      </React.Fragment>
    );
  },

  choose_your_program: ({ session, pageContext, yml, data, index }) => {
    let dataYml =
      data.allLandingYaml.edges.length !== 0 &&
      data.allLandingYaml.edges[0].node.choose_your_program !== null
        ? data.allLandingYaml.edges
        : data.allDownloadableYaml.edges;
    let chooseYourProgram = dataYml[0].node?.choose_your_program;
    return (
      <React.Fragment key={index}>
        <Div id="choose_your_program" width="100%" flexDirection="column">
          <Div
            background={Colors.lightGray}
            alignSelf="center"
            height="2px"
            width="94%"
            width_tablet="63.4%"
          />
        </Div>
        <ChooseYourProgram
          // chooseProgramRef={chooseProgramRef}
          landingTemplate
          title={chooseYourProgram.title}
          paragraph={chooseYourProgram.paragraph}
          lang={pageContext.lang}
          programs={chooseYourProgram.programs}
        />
      </React.Fragment>
    );
  },

  testimonials: ({ session, data, pageContext, yml, index }) => {
    return (
      <Div
        id="testimonials"
        key={index}
        flexDirection="column"
        margin="50px"
        margin_tablet="100px"
        m_sm="0"
        p_xs="0"
      >
        <TestimonialsCarrousel lang={data.allTestimonialsYaml.edges} />
      </Div>
    );
  },

  geeksInfo: ({ session, data, pageContext, yml, index }) => (
    <Div
      id="geeksInfo"
      key={index}
      flexDirection="column"
      // margin="50px"
      margin_tablet="100px"
      m_sm="0"
      p_xs="0"
    >
      <GeeksInfo lang={pageContext.lang} />
    </Div>
  ),

  testimonials_new: ({ session, data, pageContext, yml, index }) => (
    <Div
      id="testimonials_new"
      key={index}
      flexDirection="column"
      margin="30px 0 0 0"
      // margin_tablet="100px"
      m_sm="0"
      p_xs="0"
    >
      <SuccessStories pageContext={pageContext} data={data} yml={yml} />
    </Div>
  ),

  why_4geeks: ({ session, pageContext, yml, index }) => (
    <Div
      id="why_4geeks"
      key={index}
      flexDirection="column"
      margin="0"
      padding="0"
    >
      <Title
        title={yml.heading}
        paragraph={yml.sub_heading}
        paragraphColor={Colors.gray}
        variant="primary"
      />
      <With4Geeks
        text={yml.footer?.text}
        sessionLocation={
          session &&
          session.location &&
          session.location.breathecode_location_slug
        }
        text_link={yml.footer?.text_link}
        lang={pageContext.lang}
        playerHeight="auto"
      />
    </Div>
  ),
  alumni_projects: ({ session, data, pageContext, yml, index }) => (
    <Div
      id="alumni_projects"
      key={index}
      flexDirection="column"
      margin="0"
      margin_tablet="8% 0 100px 0"
      padding="60px 0"
      padding_tablet="0"
    >
      <AlumniProjects
        lang={data.allAlumniProjectsYaml.edges}
        hasTitle
        showThumbs="false"
        limit={5}
      />
    </Div>
  ),
  who_is_hiring: ({ session, data, pageContext, yml, location, index }) => {
    let dataYml =
      data.allLandingYaml.edges.length !== 0 &&
      data.allLandingYaml.edges[0].node?.who_is_hiring !== null
        ? data.allLandingYaml.edges
        : data.allDownloadableYaml.edges;

    const hiring = data.allPartnerYaml.edges[0].node;
    let landingHiriging = dataYml[0].node?.who_is_hiring;

    return (
      <Div
        id="who_is_hiring"
        key={index}
        flexDirection="column"
        margin="40px 0"
        margin_tablet="40px 50px 100px"
        m_sm="0"
        p_xs="0"
      >
        <OurPartners
          images={hiring.partners.images}
          margin="0"
          padding="0 ​0 75px 0"
          marquee
          paddingFeatured="0 0 70px 0"
          featuredImages={landingHiriging?.featured}
          showFeatured
          withoutLine
          title={
            landingHiriging ? landingHiriging.heading : hiring.partners.tagline
          }
          paragraph={
            landingHiriging
              ? landingHiriging.sub_heading
              : hiring.partners.sub_heading
          }
        />
      </Div>
    );
  },

  divider: ({ session, data, pageContext, yml, index }) => (
    <Div
      id="divider"
      flexDirection="column"
      key={index}
      height={yml.height[0]}
      lg={yml.height[1]}
      md={yml.height[2]}
      sm={yml.height[3]}
      xs={yml.height[4]}
    />
  ),
  two_column_left: ({ session, data, pageContext, yml, index }) => (
    <Div
      id="two_column_left"
      key={index}
      background={Colors[yml.background] || yml.background}
      flexDirection="column"
      padding="50px 0 50px 0"
      padding_tablet="50px 6%"
      margin="0"
    >
      <TwoColumn
        left={{ image: yml.image, video: yml.video }}
        right={{
          heading: yml.heading,
          sub_heading: yml.sub_heading,
          bullets: yml.bullets,
          content: yml.content,
          button: yml.button,
        }}
        proportions={yml.proportions}
      />
    </Div>
  ),
  two_column_right: ({ session, data, pageContext, yml, index }) => {
    return (
      <Div
        id="two_column_right"
        key={index}
        background={Colors[yml.background] || yml.background}
        flexDirection="column"
        padding="0 0 50px 0"
        padding_tablet="6%"
        margin="0"
      >
        <TwoColumn
          left={{
            heading: yml.heading,
            sub_heading: yml.sub_heading,
            bullets: yml.bullets,
            content: yml.content,
            button: yml.button,
          }}
          right={{ image: yml.image, video: yml.video }}
          proportions={yml.proportions}
        />
      </Div>
    );
  },
  multi_column: ({ session, data, pageContext, yml, index }) => {
    return (
      <Div
        id="multi_column"
        key={index}
        background={Colors[yml.background] || yml.background}
        flexDirection="column"
        padding="0 0 50px 0"
        padding_tablet="6%"
        margin="0"
      >
        <MultiColumns
          heading={yml.heading}
          sub_heading={yml.sub_heading}
          columns={yml.columns}
          end_paragraph={yml.content}
          button={yml.button}
          swipable={yml.swipable}
        />
      </Div>
    );
  },
  single_column: ({ session, data, pageContext, yml, index }) => (
    <Div
      id="single_column"
      key={index}
      flexDirection="column"
      padding="0px 0"
      padding_tablet="50px 14%"
    >
      <SingleColumn
        column={{
          heading: yml.heading,
          content: yml.content,
          button: yml.button,
          image: yml.image,
          video: yml.video,
        }}
      />
    </Div>
  ),
  columns: ({ session, data, pageContext, yml, index }) => (
    <Div id="columns" key={index} flexDirection="column" margin="50px 0">
      {/* <Title
            size="10"
            title={yml.heading.text}
            paragraph={yml.sub_heading}
            paragraphColor={Colors.darkGray}
            maxWidth="800px"
            margin="auto"
            variant="primary"
        /> */}
      <Columns columns={yml.columns} proportions={yml.proportions} />
    </Div>
  ),
};
