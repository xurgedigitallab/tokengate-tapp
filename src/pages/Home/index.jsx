import React from "react";
import "./Home.css";

const Home = ({ myWalletAddress, membersList, wgtParameters }) => {
    return (
        <div className="home-container">
            <h1 className="home-title">Community Trustlines</h1>
            
            <div className="wallet-info">
                <h3>My Wallet Address:</h3>
                <p className="wallet-address">{myWalletAddress}</p>
            </div>
            
            <div className="members-section">
                <h2>Members</h2>
                <div className="members-list">
                    {membersList && membersList.map((member, index) => (
                        <div key={index} className="member-card">
                            <div className="member-header">
                                <h3>{member.name}</h3>
                                <span className="user-id">{member.userId}</span>
                            </div>
                            
                            {member.trustLines && member.trustLines.length > 0 && (
                                <div className="trust-lines">
                                    <h4>Trust Lines:</h4>
                                    <div className="trust-lines-grid">
                                        {member.trustLines.map((trustLine, idx) => (
                                            <div key={idx} className="trust-line-item">
                                                <span className="currency">{trustLine.decodedCurrency || trustLine.currency}</span>
                                                <span className="balance">{parseFloat(trustLine.balance).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {member.trustLineError && (
                                <p className="error-message">Error: {member.trustLineError}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="parameters-section">
                <h3>Widget Parameters</h3>
                <pre className="parameters-json">{JSON.stringify(wgtParameters, null, 2)}</pre>
            </div>
        </div>
    );
};

export default Home;
