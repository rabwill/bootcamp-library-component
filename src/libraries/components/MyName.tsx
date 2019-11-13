import * as React from 'react';
export interface IMyNameProps {
    username: string;
}
export default class MyName extends React.Component<IMyNameProps, {}> {
    public render(): React.ReactElement<IMyNameProps> {
        return (
            <div>
                My name is : {this.props.username}
            </div>
        );
    }
}
