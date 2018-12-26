import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import ClockCard from '../containers/ClockCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import { Card } from 'semantic-ui-react';

class App extends Component {
  componentWillMount() {
    const { setClocks } = this.props;
    axios.get('/clocks.json').then(({ data }) => {
      setClocks(data);
    });
  }

  render() {
    const { clocks , isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? 'Загрузка...'
            : clocks.map((clock, i) => <ClockCard key={i} {...clock} />)}
        </Card.Group>
      </Container>
    );
  }
}

export default App;
