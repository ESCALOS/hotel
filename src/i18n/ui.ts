import SpainFlag from '@/components/flags/Spain.astro';
import UnitedStatesFlag from '@/components/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.nosotros': 'Nosotros',
		'nav.servicios': 'Servicios',
		'nav.contacto': 'Contacto',
		'nav.reserva_ahora': 'Reserva ahora'
	},
	en: {
		'nav.inicio': 'Home',
		'nav.nosotros': 'About',
		'nav.servicios': 'Services',
		'nav.contacto': 'Contact',
		'nav.reserva_ahora': 'Book Now'
	}
} as const;

export const routes = {
	es: {
		nosotros: 'nosotros',
		servicios: 'servicios',
		contacto: 'contacto',
	},
	en: {
		nosotros: 'about',
		servicios: 'services',
		contacto: 'contact',
	}
};