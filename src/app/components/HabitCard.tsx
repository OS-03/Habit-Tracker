import React from 'react';

interface Habit {
    title: string;
    streak: number;
    completed: boolean;
    onToggle: () => void;
}

interface HabitCardProps {
    data: Habit[];

}

const HabitCard: React.FC<HabitCardProps> = ({ data }) => {
    return (
        <div>
            {data.map((habit, index) => (
                <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow mb-4"
                >
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{habit.title}</h3>
                        <button
                            onClick={habit.onToggle}
                            className={`p-2 rounded-full ${
                                habit.completed ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                        >
                            {habit.completed ? '✓' : ''}
                        </button>
                    </div>
                    <p className="mt-2 text-gray-600">Current streak: {habit.streak} days</p>
                </div>
            ))}
        </div>
    );
};

export default HabitCard;
