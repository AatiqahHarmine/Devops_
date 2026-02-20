import React, { Component } from "react";

const mockApiUrl =
  "https://aatiqahharmine.github.io/Devops/abc.json";

class StudentProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: null,
      loading: true,
      error: null,
      lastUpdated: null,
    };

    console.log("Constructor called");
  }

  componentDidMount() {
    this.fetchStudent();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.student !== this.state.student) {
      console.log("Student updated:", this.state.student);
    }
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  // Fetch function
  fetchStudent = () => {
    this.setState({ loading: true });

    fetch(mockApiUrl + "?t=" + new Date().getTime())
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          student: data,
          loading: false,
          lastUpdated: new Date().toLocaleTimeString(),
          error: null,
        });
      })
      .catch(() => {
        this.setState({
          error: "Failed to fetch data",
          loading: false,
        });
      });
  };

  // Change name button
  changeName = () => {
    this.setState({
      student: {
        ...this.state.student,
        name: "Updated Student",
      },
    });
  };

  render() {
    const { student, loading, error, lastUpdated } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Student Profile</h1>

        {loading && <p>Loading student data...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {student && (
          <div>
            <h3>Name: {student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>

            {/* Address */}
            {student.address && (
              <>
                <p>City: {student.address.city}</p>
                <p>Street: {student.address.street}</p>
              </>
            )}

            {/* Company */}
            {student.company && (
              <p>Company: {student.company.name}</p>
            )}

            <p>Last Updated: {lastUpdated}</p>

            <button onClick={this.changeName}>
              Change Name
            </button>

            <br /><br />

            <button onClick={this.fetchStudent}>
              Refresh Data
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default StudentProfile;
