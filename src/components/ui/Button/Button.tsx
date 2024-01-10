'use client'
import React, {JSX, useState} from 'react';
import styles from './Button.module.css'
import {ButtonProps} from "@/components/ui/buttonBasic/Button.props";
import cn from 'classnames'
import ArrowRight from './Right.svg'
import ArrowLargeRight from './arrow.svg'

const Button = ({appearance, children, size, isArrow, className, ...props}: ButtonProps): JSX.Element=> {
    const [mouseClick, setMouseClick] = useState<boolean>(false)
    
    return (
        <button className={cn(styles.button, className,
            {
                [styles.primary]: appearance === 'primary',
                [styles.ghost]: appearance === 'ghost',
                [styles.big]: size === 'big',
                [styles.medium]: size === 'medium',
                [styles.small]: size === 'small',
            }
            )} {...props}
            onClick={() => setMouseClick(!mouseClick)}
        >
            <div>
                <p>{children}</p>
                {
                    isArrow && (size === 'medium' || size === 'small')?
                        <span className={styles.arrow}>
                            <ArrowRight/>
                        </span>
                        : null
                }
                {
                    isArrow && size === 'big'?
                        <span className={styles.arrow}>
                            <ArrowLargeRight/>
                        </span>
                        : null
                }
            </div>
        </button>
    );
};

export default Button;