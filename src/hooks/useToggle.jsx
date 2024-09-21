import { useState } from "react";

const useToggle = (v) => {
    const [value, setValue] = useState(v);

    const toggleValue = () => {
        setValue((value) => !value)
    }

    return [value, toggleValue];
}

export default useToggle;