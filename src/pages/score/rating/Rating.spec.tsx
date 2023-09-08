import '@testing-library/jest-dom';
import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import Rating from './Rating';
import userEvent from '@testing-library/user-event';
import {act} from "react-dom/test-utils";



const mockRatingProps = {
    handleRatingUpdate: jest.fn(),
    categoryId: '1234klhlh',
    average: 5
}



describe('Rating', () => {

    const renderRatingComponent = (isActive: boolean = false) => {
        return render(
            <Rating
               isActive={isActive}
               handleRatingUpdate={mockRatingProps.handleRatingUpdate}
               categoryId={mockRatingProps.categoryId}
               average={mockRatingProps.average}
            />
        )
    };
    it('renders all elements', ()=>{
        renderRatingComponent(true);
        const input = screen.getAllByRole('radio')
        input.forEach((el, i) => {
            expect(el).toBeInTheDocument();
            expect(el).not.toHaveAttribute('disabled');
            expect(el).toHaveClass('inp');
            act(() => {
                userEvent.click(el);
            });
            expect(mockRatingProps.handleRatingUpdate).toHaveBeenCalled();
            const sibling = el.nextSibling;
            expect(sibling).toHaveClass('rating-given');
        })
    })

    it(`click doesn't work when active is false`, ()=>{
        renderRatingComponent(false);
        const input = screen.getAllByRole('radio')
        input.forEach((el, i) => {
            expect(el).toHaveAttribute('disabled');
            act(() => {
                userEvent.click(el);
            });
            expect(mockRatingProps.handleRatingUpdate).toHaveBeenCalledTimes(0);
        })
    })
})
