import React from 'react';

export default class Main extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <h2>Ravioli is a state of the art distibuted computing system</h2>
                    <p>
                        Ravioli allows you to use our pool of associated websites and blogs for your own
                        calculations without the need for own resources. And the computing power providers
                        will be unaware of this. *DEMONIC LAUGHTER*
                    </p>
                </div>
                <div>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                        <button type="button">Log in/Register</button>
                    </form>
                </div>
            </div>
        );
    }
};

