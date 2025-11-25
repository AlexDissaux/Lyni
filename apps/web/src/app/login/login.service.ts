export const login = async (formData: FormData) => {
    const loginValue = formData.get('login');
    const password = formData.get('password');

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: loginValue,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data);
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

const fetchLogin = async (body : loginData) => {
    
}