import React from 'react';

type SortOption = {
    label: string;
    value: string;
};

interface SortDropdownProps {
    value: string;
    onChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ value, onChange }) => {
    const sortOptions: SortOption[] = [
        { label: 'Card ID', value: 'id' },
        { label: 'Type', value: 'type' },
        { label: 'Rarity', value: 'rarity' }
    ];

    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mb-4 px-4 py-2 border rounded-lg bg-white shadow-sm text-gray-700"
        >
            {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    Sort by {option.label}
                </option>
            ))}
        </select>
    );
};

export default SortDropdown; 