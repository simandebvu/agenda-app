import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import { Event } from './Event';
import '../index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      events: [
        {
          time: '09:00', title: 'Breakfast with Calculon', id: 1, location: 'remote',
        },
        {
          time: '11:00', title: 'Daily Standup Meeting (recurring)', id: 2, location: 'remote', description: 'See the minskins!',
        },
        {
          time: '12:00', title: 'Code Code Code!', id: 3, location: 'remote',
        },
      ],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addEvent = this.addEvent.bind(this);
  }

  handleInputChange(inputName) {
    return value => {
      const nextValue = value;
      this.setState({
        [inputName]: nextValue,
      });
    };
  }

  addEvent() {
    const {
      events, time, title, location, description,
    } = this.state;
    const newArray = [...events];
    newArray.push({
      id: newArray.length ? newArray[newArray.length - 1].id + 1 : 1,
      time,
      title,
      location,
      description,
      value: this.var > 5 ? "Its's grater then 5" : 'Its lower or equal 5',
    });
    this.setState({ events: newArray });
    this.setState({
      time: '',
      title: '',
      location: '',
      description: '',
    });
  }

  handleDelete(eventId) {
    const { events } = this.state;
    const filteredEvents = events.filter(e => e.id !== eventId);
    this.setState({ events: filteredEvents });
  }

  toggleModal() {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
    });
  }

  render() {
    const { events } = this.state;
    const { modal } = this.state;
    const mEvents = events.map(e => (
      <Event
        key={e.id}
        id={e.id}
        title={e.title}
        time={e.time}
        location={e.location}
        description={e.description}
        onDelete={this.handleDelete}
      />
    ));
    return (
      <>
        <MDBContainer className="mt-5">
          <h2 className="text-uppercase my-3">Today&apos;s agenda:</h2>
          <MDBRow>
            <MDBCol md="9">
              {mEvents}
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" onClick={this.toggleModal} rounded>
                    Add Event
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
              <h3 className="text-uppercase my-3">Schedule</h3>
              <h6 className="my-3">
                Its going to be busy that today. You have
                {' '}
                <b>
                  {events.length}
                  {' '}
                  events
                  {' '}
                </b>
                {' '}
                today.
              </h6>
              <h1 className="my-3">
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="sun" fixed />
                  </MDBCol>
                  <MDBCol xs="9">Sunny</MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="thermometer-three-quarters" fixed />
                  </MDBCol>
                  <MDBCol xs="9">23°C</MDBCol>
                </MDBRow>
              </h1>
              <p>
                Dont forget your sunglasses. Today will dry and sunny, becoming
                warm in the afternoon with temperatures of between 20 and 25
                degrees.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBModal isOpen={modal} toggle={this.toggleModal}>
          <MDBModalHeader
            className="text-center"
            titleClass="w-100 font-weight-bold"
            toggle={this.toggleModal}
          >
            Add new event
          </MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput
                name="time"
                label="Time"
                icon="clock"
                hint="12:30"
                group
                type="text"
                getValue={this.handleInputChange('time')}
              />
              <MDBInput
                name="title"
                label="Title"
                icon="edit"
                hint="Briefing"
                group
                type="text"
                getValue={this.handleInputChange('title')}
              />
              <MDBInput
                name="location"
                label="Location (optional)"
                icon="map"
                group
                type="text"
                getValue={this.handleInputChange('location')}
              />
              <MDBInput
                name="description"
                label="Description (optional)"
                icon="sticky-note"
                group
                type="textarea"
                getValue={this.handleInputChange('description')}
              />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn
              color="info"
              onClick={() => {
                this.toggleModal();
                this.addEvent();
              }}
            >
              Add
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </>
    );
  }
}
export default App;
