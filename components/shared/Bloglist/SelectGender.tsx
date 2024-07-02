import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectGenderProps {
    options: { label: string; value: string }[];
    onChange: (value: string) => void;
    value: string;
}

export function SelectGender({ options, onChange, value }: SelectGenderProps) {
    return (
        <Select onValueChange={onChange}>
            <SelectTrigger
                className="capitalize"
            >
                <SelectValue
                    placeholder={value || 'Select'}
                />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {options.map((option) => (
                        <SelectItem
                            key={option.value}
                            value={option.value}
                            onSelect={() => onChange(option.value)}
                        >
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}