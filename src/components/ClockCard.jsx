import React from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';

const ClockCard = clock => {
  const { title, author, price, image, itemsClock ,addToCart, addedCount } = clock;
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>

          
        </Card.Meta>
        <span className="date">{itemsClock}</span>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="rub" />
          {price}
        </a>
      </Card.Content>

      <Button onClick={addToCart.bind(this, clock)}>
        Добавить в корзину {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default ClockCard;
