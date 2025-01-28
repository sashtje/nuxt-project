export const addRedText = (text = 'Big Red Text'): void => {
	// Create a new div element
	const div = document.createElement('div')

	// Set the text content
	div.textContent = text

	// Apply styles to make it big and red
	div.style.color = 'red'
	div.style.fontSize = '32px' // Adjust the size as needed
	div.style.fontWeight = 'bold'

	// Append the div to the body
	document.body.prepend(div)
}
