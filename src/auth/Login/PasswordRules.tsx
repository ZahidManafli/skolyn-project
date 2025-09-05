interface PasswordRulesProps {
    password: string;
}

interface Rule {
    label: string;
    isValid: boolean;
}

const PasswordRules: React.FC<PasswordRulesProps> = ({ password }) => {
    const rules: Rule[] = [
        {
            label: "Ən azı 8 simvol",
            isValid: password.length >= 8,
        },
        {
            label: "Ən azı bir böyük hərf",
            isValid: /[A-ZƏÖÜŞÇĞ]/.test(password),
        },
        {
            label: "Ən azı bir kiçik hərf",
            isValid: /[a-zəöüçşğ]/.test(password),
        },
        {
            label: "Ən azı bir xüsusi simvol",
            isValid: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/.test(password),
        },
    ];

    return (
        <ul className="password-rules">
            {rules.map((rule, index) => (
                <li key={index} className={rule.isValid ? "valid" : "invalid"}>
                    {rule.label}
                </li>
            ))}
        </ul>
    );
};

export default PasswordRules;