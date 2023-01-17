import React from 'react';
import {render, fireEvent, getByTestId, getByText} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {HamburgerMenu}  from '../components/HamburgerMenu';
import genresMock from "../__mocks__/genresMock";
describe('HamburgerMenu component', () => {

    const setGenreId = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const { getByTestId } = render(<HamburgerMenu genres={genresMock} setGenreId={setGenreId}/>);
        expect(getByTestId('hamburger-menu')).toBeInTheDocument();
    });

    it('should open and close dropdown on button click', () => {
        const { container, getByTestId, getByText } = render(<HamburgerMenu genres={genresMock} setGenreId={setGenreId} />);
        const hamburgerMenuButton = getByTestId('hamburger-menu-button');
        expect(container.querySelector('.hamburger-menu-wrapper')).toBeInTheDocument();
        expect(container.querySelector('.hamburger-menu')).toBeInTheDocument();
        fireEvent.click(hamburgerMenuButton);
        const closeButton = getByTestId('hamburger-menu-close');
        expect(getByText('genre1')).toBeInTheDocument();
        expect(getByText('genre2')).toBeInTheDocument();
        expect(getByText('genre3')).toBeInTheDocument();
        expect(getByText('genre4')).toBeInTheDocument();
        fireEvent.click(closeButton);
        expect(container.querySelector('.hamburger-menu-close')).toBeNull();
    });


    it('should call setGenreId on genre button click', () => {
        const { getByText, getByTestId } = render(<HamburgerMenu genres={genresMock} setGenreId={setGenreId} />);
        const hamburgerMenuButton = getByTestId('hamburger-menu-button');
        fireEvent.click(hamburgerMenuButton);
        fireEvent.click(getByText('genre1'));
        expect(setGenreId).toHaveBeenCalledWith('1');
        fireEvent.click(hamburgerMenuButton);
        fireEvent.click(getByText('genre4'));
        expect(setGenreId).toHaveBeenCalledWith('4');
    });
});