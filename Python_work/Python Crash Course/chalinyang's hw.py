#!/usr/bin/env python
# coding: utf-8

# In[ ]:


### ASSIGNMENT 4 TEMPLATE ** MATH 1MP3, Fall 2022


# In[20]:


import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
import numpy as np
import math

# In[21]:


#1(a)

def f(x):
  return (1/(2*np.sqrt(2*np.pi)))*np.exp((-1/2)*((x-1)**2/4))

def left_sum(f,a,b,n):
  steps = (b-a)/n
  sum = 0
  for i in range(0,n):
      current_step = a+i*steps
      sum += f(current_step) * steps
  return sum

print(left_sum(f,1,3,100)- 0.34212758741852883)

# In[22]:

#1(b)
def mid_sum(f,a,b,n):
  steps = (b-a)/n
  sum = 0
  for i in range(0,n):
      current_step = a+i*steps
      sum += f((current_step+ (current_step+steps))/2) * steps
  return sum
# Code below is automatic.

print(mid_sum(f,1,3,100))
# should be 0.34134272963911727



# In[23]:

#1(c)
def trap_sum(f,a,b,n):
  steps = (b-a)/n
  sum = 0
  for i in range(0,n):
      current_step = a+i*hsteps
      sum += (f(current_step)+f(current_step+steps))/2 * steps
  return sum

    
print(trap_sum(f,1,3,100))

# In[ ]:

#1(d)
def simp_sum(f,a,b,n):
  steps = (b-a)/n

  sum = f(a) +f(b)

  for i in range(1,n):
    k = a + i*steps
    if i%2 == 0:
        sum = sum + 2 * f(k)
    else:
        sum = sum + 4 * f(k)

  sum = sum * steps/3
  return sum
  
print(simp_sum(f,1,3,100))  # should be 0.34134474609542953

# %%
