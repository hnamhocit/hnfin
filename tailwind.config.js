// tailwind.config.js
const { heroui } = require('@heroui/react')

module.exports = {
	plugins: [
		heroui({
			themes: {
				'money-dark': {
					extend: 'dark',
					colors: {
						background: 'transparent',

						foreground: '#EAFBF7',

						content1: '#071A17',
						content2: '#0A2420',
						divider: 'rgba(234,251,247,0.08)',

						// Primary: emerald-teal (money green, không neon)
						primary: {
							50: '#ECFDF5',
							100: '#CDFBDA',
							200: '#9DF8BF',
							300: '#69EAA6',
							400: '#43D596',
							500: '#10B981', // MAIN
							600: '#0B9F7C',
							700: '#088574',
							800: '#056B67',
							900: '#035358',
							DEFAULT: '#10B981',
							foreground: '#041A12', // text on primary
						},

						warning: {
							100: '#FFF8CC',
							200: '#FFEF99',
							300: '#FFE466',
							400: '#FFD93F',
							500: '#FFC700', // MAIN
							600: '#DBA600',
							700: '#B78600',
							800: '#936900',
							900: '#7A5400',
							DEFAULT: '#FFC700',

							// Đã chỉnh sửa:
							foreground: '#1A1200', // Màu nâu đen rất đậm (thay vì xanh rêu), tạo cảm giác ấm và dễ đọc trên nền vàng.
							focus: '#B78600', // Dùng shade 700 để viền focus rõ ràng hơn trên nền trắng.
						},

						danger: {
							100: '#FFE6D6',
							200: '#FFC6AE',
							300: '#FFA085',
							400: '#FF7B67',
							500: '#FF3F35', // MAIN
							600: '#DB262C',
							700: '#B71A2D',
							800: '#93102B',
							900: '#7A0A2A',
							DEFAULT: '#FF3F35',

							// Đã chỉnh sửa:
							foreground: '#FFFFFF', // QUAN TRỌNG: Nền đỏ cam này đi với chữ trắng là đẹp và chuẩn nhất.
							focus: '#DB262C', // Dùng shade 600 để làm viền focus (đậm hơn nền một chút).
						},

						focus: '#34D399',
					},

					layout: {
						disabledOpacity: '0.35',
						radius: {
							small: '10px',
							medium: '14px',
							large: '18px',
						},
						borderWidth: {
							small: '1px',
							medium: '1px',
							large: '2px',
						},
					},
				},
			},
		}),
	],
}
