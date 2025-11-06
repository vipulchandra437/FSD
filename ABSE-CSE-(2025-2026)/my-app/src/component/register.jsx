
import React, { useState } from 'react'

function Register() {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		agree: false,
	})

	const [errors, setErrors] = useState({})
	const [submitted, setSubmitted] = useState(false)

	function handleChange(e) {
		const { name, value, type, checked } = e.target
		setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
	}

	function validate() {
		const errs = {}
		if (!form.name.trim()) errs.name = 'Name is required'
		if (!form.email) errs.email = 'Email is required'
		else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email'
		if (!form.password) errs.password = 'Password is required'
		else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters'
		if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match'
		if (!form.agree) errs.agree = 'You must agree to the terms'
		return errs
	}

	function handleSubmit(e) {
		e.preventDefault()
		const v = validate()
		setErrors(v)
		if (Object.keys(v).length === 0) {
			// In a real app you'd send data to an API here.
			setSubmitted(true)
		}
	}

		const styles = {
			container: { maxWidth: 320, margin: '12px auto', padding: 12, border: '1px solid #f0f0f0', borderRadius: 6, fontFamily: 'Arial, sans-serif', fontSize: 13 },
			label: { display: 'block', marginBottom: 4, fontWeight: 600, fontSize: 13 },
			input: { width: '100%', padding: '6px 8px', marginBottom: 8, borderRadius: 4, border: '1px solid #ddd', fontSize: 13 },
			checkboxRow: { display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 13 },
			button: { width: '100%', padding: '8px 10px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer', fontSize: 14 },
			error: { color: '#b00020', fontSize: 12, marginBottom: 6 },
			success: { color: '#155724', background: '#e6f4ea', padding: 10, borderRadius: 4, marginBottom: 10, fontSize: 13 }
		}

		if (submitted) {
			return (
				<div style={styles.container}>
					<div style={styles.success}>Registered — demo only.</div>
					<div style={{ fontSize: 13 }}><strong>{form.name}</strong></div>
					<div style={{ fontSize: 13, color: '#333' }}>{form.email}</div>
				</div>
			)
		}

		return (
			<div style={styles.container}>
				<div style={{ marginBottom: 8, fontWeight: 700 }}>Create account</div>
				<form onSubmit={handleSubmit} noValidate>
					<label style={styles.label} htmlFor="name">Name</label>
					<input id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} style={styles.input} />
					{errors.name && <div style={styles.error}>{errors.name}</div>}

					<label style={styles.label} htmlFor="email">Email</label>
					<input id="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} style={styles.input} />
					{errors.email && <div style={styles.error}>{errors.email}</div>}

					<div style={{ display: 'flex', gap: 8 }}>
						<div style={{ flex: 1 }}>
							<label style={styles.label} htmlFor="password">Password</label>
							<input id="password" type="password" name="password" placeholder="••••••" value={form.password} onChange={handleChange} style={styles.input} />
							{errors.password && <div style={styles.error}>{errors.password}</div>}
						</div>
						<div style={{ flex: 1 }}>
							<label style={styles.label} htmlFor="confirmPassword">Confirm</label>
							<input id="confirmPassword" type="password" name="confirmPassword" placeholder="••••••" value={form.confirmPassword} onChange={handleChange} style={styles.input} />
							{errors.confirmPassword && <div style={styles.error}>{errors.confirmPassword}</div>}
						</div>
					</div>

					<div style={styles.checkboxRow}>
						<input id="agree" type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
						<label htmlFor="agree" style={{ fontSize: 12 }}>Agree to terms</label>
					</div>
					{errors.agree && <div style={styles.error}>{errors.agree}</div>}

					<button type="submit" style={styles.button}>Sign up</button>
				</form>
			</div>
		)
}

export default Register
