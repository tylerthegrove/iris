// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './VerticalMenuItemContent.scss';
// $FlowFixMe
import { ParagraphMd } from '../Type';
// $FlowFixMe
import TooltipOverlay from '../TooltipOverlay';

const displayName = 'VerticalMenuItemContent';

type Props = {
    actionButton: React$Element<*>,
    className?: string,
    hasSubMenu?: boolean,
    label: React$Element<*> | string,
    labelIcon?: React$Element<*>,
    labelIconActive?: React$Element<*>,
    labelIconTheme?: 'default' | 'subtle';
    linkActionIcon?: React$Element<*>,
    id?: string,
    isActive?: boolean,
    label: React$Element<*> | string,
    onClick?: Function,
    truncateLabel?: boolean,
    showTooltipOnHover: boolean,
};

const VerticalMenuItemContent = ({
    actionButton,
    className,
    label,
    labelIcon,
    linkActionIcon,
    labelIconActive,
    labelIconTheme,
    hasSubMenu,
    id,
    isActive,
    truncateLabel,
    showTooltipOnHover,
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.VerticalMenuItemContent,
        styles.textOverrides,
        (hasSubMenu ? styles.hasSubMenu : null),
        (linkActionIcon || actionButton ? styles.hasRightSideContent : null),
        className
    );

    const iconWrapperClass = classNames(
        styles.LabelIconWrapper,
        styles[labelIconTheme],
    );

    const labelWrapperClass = classNames(
        styles.LabelWrapper,
        (labelIcon ? styles.hasIcon : null),
        (truncateLabel ? styles.isTruncated : null),
    );

    const menuItemContent = (
        <ParagraphMd
            element="span"
            className={componentClass}
            id={id}
        >
            {labelIcon && (
                <span className={iconWrapperClass}>
                    {isActive && labelIconActive ? labelIconActive : labelIcon}
                </span>
            )}
            <span className={labelWrapperClass}>
                {label}
            </span>
            {linkActionIcon && (
                <span className={styles.linkActionWrapper}>
                    {linkActionIcon}
                </span>
            )}
            {actionButton && (
                <span className={styles.ActionButtonWrapper}>
                    {actionButton}
                </span>
            )}
        </ParagraphMd>
    );

    if (!showTooltipOnHover) {
        return (
            <span>
                {menuItemContent}
            </span>
        );
    }

    return (
        <TooltipOverlay
            size="sm"
            tooltipText={label}
            className={styles.TooltipOverlay}
            makeWrapperBlock
            pointerEvents={true}
        >
            {menuItemContent}
        </TooltipOverlay>
    );
};

VerticalMenuItemContent.displayName = displayName;

export default VerticalMenuItemContent;
