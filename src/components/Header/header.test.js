import React from "react";
import {render, screen } from "@testing-library/react";

import Header from "./index";

describe('render Header', () => {

    it('should render component', function () {
        render(<Header />);
        expect(screen.getByText('Hyrule Bank')).toBeInTheDocument();
    });

    it('should Render PagBank', function () {
        render(<Header title={'PagBank'}/>);
        expect(screen.getByText('PagBank')).toBeInTheDocument();
    });

    test('should snapShot', function () {
        const { container } = render(<Header title={'PagBank'}/>)
        expect(container.firstChild).toMatchSnapshot();
    });
});
