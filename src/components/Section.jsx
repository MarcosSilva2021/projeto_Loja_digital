import styled from "styled-components";

const SectionWrapper = styled.section`
  margin-bottom: 48px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: var(--dark-gray-2);
  margin: 0;
`;

// Recebe título
const Section = ({ title, titleAlign = "left", link, children }) => {
  return (
    <SectionWrapper>
      {title && (
        <SectionHeader style={{ justifyContent: titleAlign === "center" ? "center" : "space-between" }}>
          <Title>{title}</Title>
          {link && link}
        </SectionHeader>
      )}
      {children}
    </SectionWrapper>
  );
};

export default Section;