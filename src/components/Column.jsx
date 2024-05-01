// components/Column.jsx
import React, { useState } from "react";
import AddCardModal from "./AddTaskForm";
import Card from "./Card";

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [editingCard, setEditingCard] = useState(null);

  const handleEdit = (cardData) => {
    setEditingCard(cardData);
  };

  const handleUpdateCard = (updatedCardData) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.map((card) => {
        if (card.id == editingCard.id) {
          return { ...card, ...updatedCardData };
        }
        return card;
      });

      return updatedCards;
    });

    setEditingCard(null);
  };

  const handleDeleteCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-60 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-bold ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div className="h-full w-full bg-neutral-800">
        {filteredCards.map((c) => {
          if (editingCard && editingCard.id === c.id) {
            return (
              <AddCardModal
                key={c.id}
                isOpen={true}
                initialValues={{
                  title: c.title,
                  description: c.description,
                  column: c.column,
                  assignee: c.assignee,
                }}
                onSubmit={handleUpdateCard}
                onClose={() => setEditingCard(null)}
              />
            );
          }
          return (
            <Card
              key={c.id}
              {...c}
              handleEdit={handleEdit}
              handleDelete={handleDeleteCard}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Column;
