import shallow from 'enzyme';
import Home from './home';
import { buckets } from '../data/buckets';

    // Tests that the board is rendered with all the buckets and cards. tags: [happy path]
    it("test_render_board", () => {
      // Arrange
      const wrapper = shallow(<Home />);
      const expectedBuckets = buckets.filter(Boolean);

      // Act
      const actualBuckets = wrapper.find('.col-wrapper');

      // Assert
      expect(actualBuckets).toHaveLength(expectedBuckets.length);
  });

  // Tests that a new card can be created. tags: [happy path]
  it("test_create_card", () => {
      // Arrange
      const wrapper = shallow(<Home />);
      const initialCards = wrapper.state('cards');
      const newCard = { id: 5, title: "New Card", description: "New Card Description", bucketName: "bucket1", icon: "icon1" };

      // Act
      wrapper.instance().createCard(newCard);
      const updatedCards = wrapper.state('cards');

      // Assert
      expect(updatedCards).toHaveLength(initialCards.length + 1);
      expect(updatedCards).toContainEqual(newCard);
  });

  // Tests that a card can be edited. tags: [happy path]
  it("test_edit_card", () => {
      // Arrange
      const wrapper = shallow(<Home />);
      const initialCards = wrapper.state('cards');
      const cardToEdit = initialCards[0];
      const editedCard = { id: cardToEdit.id, title: "Edited Card", description: "Edited Card Description", bucketName: cardToEdit.bucketName, icon: cardToEdit.icon };

      // Act
      wrapper.instance().editCard(cardToEdit.id, { cardInfo: editedCard });
      const updatedCards = wrapper.state('cards');

      // Assert
      expect(updatedCards).toHaveLength(initialCards.length);
      expect(updatedCards).toContainEqual(editedCard);
      expect(updatedCards).not.toContainEqual(cardToEdit);
  });

  // Tests that a card can be deleted. tags: [happy path]
  it("test_delete_card", () => {
      // Arrange
      const wrapper = shallow(<Home />);
      const initialCards = wrapper.state('cards');
      const cardToDelete = initialCards[0];

      // Act
      wrapper.instance().deleteCard(cardToDelete.id);
      const updatedCards = wrapper.state('cards');

      // Assert
      expect(updatedCards).toHaveLength(initialCards.length - 1);
      expect(updatedCards).not.toContainEqual(cardToDelete);
  });

  // Tests that a bucket can be edited. tags: [happy path]
  it("test_edit_bucket", () => {
      // Arrange
      const wrapper = shallow(<Home />);
      const initialBuckets = wrapper.state('Buckets');
      const bucketToEdit = initialBuckets[0];
      const editedBucket = { bucketName: "Edited Bucket", icon: "icon1" };

      // Act
      wrapper.instance().editBucket(0, editedBucket);
      const updatedBuckets = wrapper.state('Buckets');

      // Assert
      expect(updatedBuckets).toHaveLength(initialBuckets.length);
      expect(updatedBuckets[0]).toEqual(editedBucket);
      expect(updatedBuckets).not.toContainEqual(bucketToEdit);
  });

  // Tests that multiple cards can be deleted. tags: [happy path]
  it("test_delete_multiple_cards", () => {
      // Arrange
      const wrapper = shallow(<Home />);
      const initialCards = wrapper.state('cards');
      const cardsToDelete = [initialCards[0].id, initialCards[1].id];

      // Act
      wrapper.instance().deleteMultipleCard(cardsToDelete);
      const updatedCards = wrapper.state('cards');

      // Assert
      expect(updatedCards).toHaveLength(initialCards.length - 2);
      expect(updatedCards).not.toContainEqual(initialCards[0]);
      expect(updatedCards).not.toContainEqual(initialCards[1]);
  });