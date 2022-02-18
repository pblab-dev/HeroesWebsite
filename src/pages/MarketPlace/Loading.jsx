import styled from "styled-components";
import { Container, Row, Spinner } from "react-bootstrap";
import { breakpoints } from "../../styledHelpers";

const RowLoading = styled(Row)`
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
  padding-top: 14rem;
  @media (max-width: ${breakpoints.sm}) {
    padding-top: 5rem;
  }
`;

const LoadingSpinner = styled(Spinner)`
  width: 4rem;
  height: 4rem;
  margin: 10px;
  @media (max-width: ${breakpoints.sm}) {
    width: 3rem;
    height: 3rem;
    margin: 5px;
  }
`;

function Loading() {
  return (
    <Container
      className="d-flex"
      style={{
        flexDirection: "column",
        width: "100%",
        height: "100%",
        minHeight: "100%",
      }}
    >
      <RowLoading>
        <LoadingSpinner animation="grow" variant="warning" />
        <LoadingSpinner animation="grow" variant="warning" />
        <LoadingSpinner animation="grow" variant="warning" />
      </RowLoading>
    </Container>
  );
}

export default Loading;
