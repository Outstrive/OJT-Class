import React from 'react';

const GridComponent = () => {
    const items = [
        { id: 1, title: 'Item 1', description: 'Description for item 1', color: 'bg-blue-500' },
        { id: 2, title: 'Item 2', description: 'Description for item 2', color: 'bg-purple-500' },
        { id: 3, title: 'Item 3', description: 'Description for item 3', color: 'bg-pink-500' },
        { id: 4, title: 'Item 4', description: 'Description for item 4', color: 'bg-emerald-500' },
        { id: 5, title: 'Item 5', description: 'Description for item 5', color: 'bg-orange-500' },
        { id: 6, title: 'Item 6', description: 'Description for item 6', color: 'bg-indigo-500' },
    ];

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Grid System Showcasing Tailwind</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.color} p-6 rounded-xl shadow-lg cursor-pointer text-white`}
                    >
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="opacity-90">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridComponent;
