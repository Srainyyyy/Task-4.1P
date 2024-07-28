import React from 'react';
import { Segment, Grid, List, Header, Icon } from 'semantic-ui-react';
import './Footer.css'; // 引入 CSS 文件

const Footer = () => (
    <Segment inverted vertical className='footer-segment' style={{ padding: '2em 0em' }}>
        <Grid divided inverted stackable>
            <Grid.Row>
                <Grid.Column width={5}>
                    <Header inverted as='h4' content='Explore' />
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>Home</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>Questions</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>Articles</List.Item>

                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>Tutorials</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={5}>
                    <Header inverted as='h4' content='Support' />
                    <Grid>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>FAQs</List.Item>

                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>Help</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column>
                                <List link inverted>
                                    <List.Item as='a'>Contact Us</List.Item>
                                </List>
                            </Grid.Column>
                        </Grid.Row> 
                    </Grid>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header inverted as='h4' content='Stay connected' />
                    <List link inverted>
                        <List.Item as='a'>
                            <Icon name='facebook' /> Facebook
                        </List.Item>
                        <List.Item as='a'>
                            <Icon name='twitter' /> Twitter
                        </List.Item>
                        <List.Item as='a'>
                            <Icon name='instagram' /> Instagram
                        </List.Item>
                    </List>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <div style={{ textAlign: 'center', marginTop: '2em' }}>
            <p>© DEV@Deakin 2022</p>
            <List horizontal inverted divided link size='small' className='horizontal-list'>
                <List.Item as='a' href='#'>Privacy Policy</List.Item>
                <List.Item as='a' href='#'>Terms</List.Item>
                <List.Item as='a' href='#'>Code of Conduct</List.Item>
            </List>
        </div>
    </Segment>
);

export default Footer;
