import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Job from "./Job";
import { fetchJobsDataAsync } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.jobs.jobsData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const applicationLoading = useSelector((state) => state.jobs.isLoading);
  const applicationError = useSelector((state) => state.jobs.isError);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // useEffect(() => {
  //   dispatch(fetchJobsDataAsync());
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobsDataAsync(query));

    // try {
    //   const response = await fetch(
    //     "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
    //       query +
    //       "&limit=20"
    //   );
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1>Remote Jobs Search</h1>
          <Button className="" onClick={() => navigate("/favourites")}>
            Favourites
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      <Row>
        <Col
          xs={10}
          className="mx-auto mb-5 d-flex justify-content-center align-items-center"
        >
          {" "}
          {applicationLoading && (
            <Spinner className="mr-2" animation="border" variant="success" />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
