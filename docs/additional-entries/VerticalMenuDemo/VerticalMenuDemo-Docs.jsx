import React from 'react';
import ExampleSource from 'steadicam/components/styleListings/ExampleSource/ExampleSource';
import { Header3, Header4, ParagraphMd } from '../../../src/utility_components/Type/Type';
import { Grid, GridCol, GridBlock } from '../../../src/components/Grid/Grid';
import VerticalMenuNested from '../../../src/components/VerticalMenuNested/VerticalMenuNested';
import VerticalMenuContextualMenuPanel from '../../../src/components/VerticalMenuContextualMenuPanel/VerticalMenuContextualMenuPanel';
import VerticalMenuItem from '../../../src/components/VerticalMenuItem/VerticalMenuItem';
import VerticalMenuItemReactRouter from '../../../src/components/VerticalMenuItemReactRouter/VerticalMenuItemReactRouter';
import MenuPanelList from '../../../src/components/MenuPanelList/MenuPanelList';
import SettingsIcon from '../../../src/globals/svg/gear.svg';
import styles from './VerticalMenuDemo-Docs.scss';

class VerticalMenuDemoDocs extends React.Component {
    render() {

        const onClickHandler = (e) => {
            e.preventDefault();
            console.log('Demo Click Handler: You Clicked:', e.target);
        };

        const subMenuItems = [
            (
            <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Nested Item 1"
                />
            ),
    
            (
            <VerticalMenuItem
                    href="#"
                    onClick={onClickHandler}
                    label="Item With Label Icon"
                    labelIcon={(<SettingsIcon />)}
                />
            ),
    
            (
            <VerticalMenuItemReactRouter
                    onClick={onClickHandler}
                    to="/"
                    label="Nested Item 3"
                />
            ),
        ];

        const MenuPanelDemoList = (
            <VerticalMenuContextualMenuPanel
                tooltipText="See Menu"
            >
                <MenuPanelList
                    header="Section 1"
                    menuItems = {[
                        {
                            label: 'Item 1',
                            href: '#',
                        },
                        {
                            label: 'Selected Item',
                            href: '#',
                            isSelected: true,
                            'data-foo': 'bar',
                        },
                    ]}
                />
                <MenuPanelList
                    hasDivider
                    menuItems = {[
                        {
                            label: 'Item 3',
                            icon: <SettingsIcon />,
                            href: '#',
                        },
                        {
                            label: 'Item 4',
                            href: '#',
                        },
                    ]}
                />
            </VerticalMenuContextualMenuPanel>
        );

        return (
            <div className="Pattern__docs">
                <div data-code>
                    <Grid isNested >
                        <GridBlock>
                            <GridCol
                                mdSpan={8}
                                className={styles.MenuCol}
                            >
                                <VerticalMenuNested
                                    label="Menu Label"
                                    labelId="testMenu"
                                    selectedItemIndex={1}
                                    subMenuItems={subMenuItems}
                                />
                                <VerticalMenuItem
                                    href="#"
                                    onClick={onClickHandler}
                                    label="Stand Alone Link"
                                />
                                <VerticalMenuItem
                                    href="#"
                                    label="Stand Alone Link With Menu"
                                    nestedInteraction={MenuPanelDemoList}
                                />
                                <VerticalMenuItemReactRouter
                                    to="#"
                                    label="React Router With Menu"
                                    nestedInteraction={MenuPanelDemoList}
                                />
                            </GridCol>
                            <GridCol mdSpan={16}>
                                <Header3>Building Vertical Menus</Header3>
                                <ParagraphMd>Vertical Menus are assembled from the VerticalMenuItem component for single links and the VerticalMenuNested component for Menu Items with a nested sub-menu. See the documentation of these components for information about their use.</ParagraphMd>
                                <ParagraphMd>These components will up their given space and should be sized using the grid</ParagraphMd>
                                <Header4>Both components should be used in a binding grid.</Header4>
                                <ExampleSource>
                                {`
<GridCol
mdSpan={8}
className={styles.MenuCol}
>
    <VerticalMenuNested
        label="Menu Label"
        labelId="testMenu"
        selectedItemIndex={1}
        subMenuItems={subMenuItems}
    />
    <VerticalMenuItem
        href="#"
        onClick={onClickHandler}
        label="Stand Alone Link"
    />
    <VerticalMenuItem
        href="#"
        label="Stand Alone Link With Menu"
        nestedInteraction={MenuPanelDemoList}
    />
    <VerticalMenuItemReactRouter
        to="#"
        label="React Router With Menu"
        nestedInteraction={MenuPanelDemoList}
    />
</GridCol>
                                    `}
                                </ExampleSource>
                            </GridCol>
                        </GridBlock>
                    </Grid>
                </div>
                </div>
        );
    }
}

export default VerticalMenuDemoDocs;