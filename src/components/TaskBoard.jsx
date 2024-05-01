import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { PieChart, Pie, Cell, Legend } from "recharts";
import AddCardModal from "./AddTaskForm";
import Column from "./Column";
import { DEFAULT_CARDS } from "../config";

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (cardData) => {
    const newCard = {
      title: cardData.title,
      description: cardData.description,
      column: cardData.column,
      assignee: cardData.assignee,
      id: Math.random().toString(),
    };

    newCard.column = cardData.column;

    setCards((prevCards) => [...prevCards, newCard]);
    setIsModalOpen(false);
  };

  return (
    <div className="  h-full w-full p-8 ">
      <div className="float mb-3">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 rounded bg-violet-500 px-4 py-2 text-neutral-50 transition-colors hover:bg-violet-600"
        >
          <FiPlus />
          Add Task
        </button>
      </div>
      <div className="flex gap-2 p-2">
        <Column
          title="Backlog"
          column="pending"
          headingColor="text-neutral-500"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="TODO"
          column="todo"
          headingColor="text-yellow-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="In progress"
          column="doing"
          headingColor="text-blue-200"
          cards={cards}
          setCards={setCards}
        />
        <Column
          title="Complete"
          column="done"
          headingColor="text-emerald-200"
          cards={cards}
          setCards={setCards}
        />
        <div className="w-42 shrink-0">
          <h3 className="mb-3 text-neutral-300 font-bold text-center">
            Metrics
          </h3>
          <PieChart width={400} height={400}>
            <Pie
              data={getMetricsData(cards)}
              dataKey="count"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {getMetricsData(cards).map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </div>
        <AddCardModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </div>
    </div>
  );
};

const getMetricsData = (cards) => {
  const columnCounts = {
    pending: 0,
    todo: 0,
    doing: 0,
    done: 0,
  };

  cards.forEach((card) => {
    columnCounts[card.column]++;
  });

  console.log(cards);
  return Object.entries(columnCounts).map(([name, count]) => ({ name, count }));
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default Board;
