#include <stdlib.h>
#include <unistd.h>
#include "../includes/functions.h"

int		parse_parenthesis(char **str)//返回nb1 atoi变形 不单单去找括号，还返回正负数
{
	int		nbr;
	int		signe;

	nbr = 0;
	signe = 1;
	if (**str == '+' || **str == '-')
	{
		if (**str == '-')
			signe = -1;
		*str = *str + 1;
	}
	if (**str == '(')
	{
		*str = *str + 1;
		nbr = primary_expression(str);
		if (**str == ')')
			*str = *str + 1;
		return (signe * nbr);
	}
	while ('0' <= **str && **str <= '9')//求大神举例，让思路清晰
	{
		nbr = (nbr * 10) + **str - '0';
		*str = *str + 1;
	}
	return (signe * nbr);
}

int		multiplicate_expression(char **str)//请解释多重表达式是什么意思？
{
	int		nb1;
	int		nb2;
	char	operator;

	nb1 = parse_parenthesis(str);//这里call function'是做什么？
	while (**str == '*' || **str == '/' || **str == '%')
	{
		operator = **str;
		*str = *str + 1;
		nb2 = parse_parenthesis(str);
		nb1 = do_op(nb1, nb2, operator);//做乘除运算。
	}
	return (nb1);
}

int		primary_expression(char **str)//2 （3+4）
{
	int		nb1;
	int		nb2;
	char	operator;

	nb1 = parse_parenthesis(str);
	while (**str != '\0' && **str != ')')
	{
		operator = **str;
		*str = *str + 1;
		if (operator == '+' || operator == '-')
			nb2 = multiplicate_expression(str);//这里是为什么去做乘除？
		else
			nb2 = parse_parenthesis(str);
		nb1 = do_op(nb1, nb2, operator);
	}
	return (nb1);
}





char	*remove_whitespaces(char *str)
{
	int		i;
	int		j;
	char	*str2;

	i = 0;
	j = 0;
	str2 = (char *)malloc(sizeof(char) * (ft_strlen(str) + 1));
	while (str[i] != '\0')
	{
		if (str[i] != ' ')
		{
			str2[j] = str[i];
			j = j + 1;
		}
		i = i + 1;
	}
	str2[j] = '\0';
	return (str2);
}

int		eval_expr(char *str)
{
	str = remove_whitespaces(str);//1
	if (*str == '\0')
		return (0);
	return (primary_expression(&str));
}

int	do_op(int nb1, int nb2, char operator)
{
	if (operator == '+')
		return (nb1 + nb2);
	else if (operator == '-')
		return (nb1 - nb2);
	else if (operator == '/')
		return (nb1 / nb2);
	else if (operator == '*')
		return (nb1 * nb2);
	else if (operator == '%')
		return (nb1 % nb2);
	return (0);
}


void	ft_putnbr(int nb)
{
	unsigned int	nbr;

	if (nb < 0)
	{
		ft_putchar('-');
		nbr = nb * -1;
	}
	else
		nbr = nb;
	if (nbr >= 10)
		ft_putnbr(nbr / 10);
	ft_putchar(nbr % 10 + 48);
}


int	ft_strlen(char *str)
{
	int	count;

	count = 0;
	while (str[count])
		++count;
	return (count);
}
 
void	ft_putchar(char c)
{
	write(1, &c, 1);
}
 


int	main(int ac, char **av)
{
	if (ac > 1)
	{
		ft_putnbr(eval_expr(av[1]));
		ft_putchar('\n');
	}
	return (0);
}
 
