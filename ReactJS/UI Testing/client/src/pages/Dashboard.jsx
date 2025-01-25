import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Header from '../components/Header';

const Dashboard = () => {
  const { user, isLoggedIn } = useSelector((state) => {
    return state.auth
  });

  const navigate = useNavigate();

  useEffect(() => {
    const handleNavigation = () => {
      if (isLoggedIn) {
        switch (user.department) {
          case 'Admin':
            navigate('/admin');
            break;
          case 'Company':
            navigate('/admin');
            break;
          case 'Client':
            navigate('/client');
            break;
          case 'Accountant':
            navigate('/accountant');
            break;
          case 'Account Head':
            navigate('/account-head');
            break;
          case 'Marketing':
            navigate('/marketing');
            break;
          case 'Ceo':
            navigate('/admin');
            break;
          case 'Site Incharge':
            navigate('/site-incharge');
            break;
          case 'Site Supervisor':
            navigate('/site-supervisour');
            break;
          case 'Design Head':
            navigate('/design-head');
            break;
          case 'Design Engineer':
            navigate('/design-engineer');
            break;
          case 'Quality Engineer':
            navigate('/quality-engineer');
            break;
          default:
            console.log("Not exists");
            break;
        }
      }
      else {
        navigate('/login')
      }
    };
    handleNavigation();
  }, [isLoggedIn, user])

}

export default Dashboard;

